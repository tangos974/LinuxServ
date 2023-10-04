# LinuxServ
Project of Creating a home server


DONE:

- Install ubuntu server on old macbook

- Setup secure SSH over LAN from desktop and laptop into server:
        -  Disable direct root login (1.3)
        -  Use ssh keys (1.2)

- Make it so closing the lid of the macbook shuts off the screen but not the computer (2.1)

TODO:

- Learn about Ansible PLaybooks and use them
  https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_intro.html

- Setup Firewall

- Auto updates?

- Set static IP address (Learn about linux interfaces)
        https://archive.org/details/unix-network-programming/Unix%20Network%20Programming%20Vol%201%20W.%20Richard%20Stevens/page/n15/mode/2up?view=theater
        https://www.youtube.com/watch?v=EnAZB8GI97c

- Setup NAS over LAN (Samba?)


Sources:
- 1. Security:
          - General security good practices: https://www.youtube.com/watch?v=fKuqYQdqRIs
          - https://phoenixnap.com/kb/generate-setup-ssh-key-ubuntu
          - https://www.howtogeek.com/828538/how-and-why-to-disable-root-login-over-ssh-on-linux/
- 2. Linux Sysadmin:
          - AutoUpdates + physicalconstraints : https://www.mkeesey.me/posts/macbook-server/

