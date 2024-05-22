.data
matricule:   .word 0x124B7F
r:           .word 7

.text         
    lw t2,matricule
    jal hamming_map_asm
    jal hamming_encode_asm

    li a0,34
    ecall

    li a0,10
    ecall

get_message_asm: 
    lw t1, matricule    
    lw t3, r 
    
    li t0,0xFFFFFFFF 
    xor t1,t1,t0 #inverse all

    sll t4, t1, t3 #rotate to left
    li t5,32
    sub t3,t3,t5
    sub t3,x0,t3   
    srl t5, t1, t3 #rotate the rest to right
    or t2, t4, t5  #find value after rotation

    li t4,0xFFFFFF   
    and t2, t2,t4 #keep only 24 bits 
    ret #t2 is the result here 

hamming_map_asm:
    #we will stock value in t3
    #in each t1 we will move the elemnets to eliminate all the other segments and do or between them all

    li t3,0

    #index 0:
    slli t1,t2, 31
    srli t1,t1, 31
    slli t1,t1,2
    or t3,t3,t1

    #index from 1 to 3:
    srli t1,t2,1
    slli t1,t1,29 
    srli t1,t1,29
    slli t1,t1,4 
    or t3,t3,t1

    #index from 4 to 10:
    srli t1,t2,4
    slli t1,t1,25
    srli t1,t1,25
    slli t1,t1,8
    or t3,t3,t1

    #index from 11 to 23
    srli t1,t2,11
    slli t1,t1,16
    or t3,t3,t1

    ret #here t3 is result 

hamming_encode_asm:
    addi t1,t3,0
    add t6,x0,x1
    #t1 stores t3
    #t3 is the output 
    #t2 are the variables
    #t0 keep track of parity 

     li t2, 0x55555554 
    and t0,t1,t2
    jal parity
    or t3, t3,t4

    li t2 , 0x66666664
    and t0, t1, t2
    jal parity
    slli t4,t4,1
    or t3, t3,t4

    li t2 , 0x78787870
    and t0, t1, t2
    jal parity
    slli t4,t4,3
    or t3, t3,t4 

    li t2 , 0x7F807F00
    and t0, t1, t2
    jal parity
    slli t4,t4,7
    or t3, t3,t4

    li t2 , 0x7FFF0000
    and t0, t1, t2
    jal parity
    slli t4,t4,15
    or t3, t3,t4
    
    mv x1,t6
    mv a1,t3

    jr ra
    #the value is still on t3

parity:
    li t4,0 #this is the counter
    loop:
        beqz t0,exit

        andi t5,t0,1
        add t4,t4,t5

        srli t0,t0,1
        j loop
    exit:
        andi t4,t4,1
        jr ra